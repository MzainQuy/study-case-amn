const items = [{
        id: 'HQ4K2',
        name: "Meja",
        price: 100000,
    },
    {
        id: 'HQ4K3',
        name: "Kursi",
        price: 50000,
    },
    {
        id: 'HQ4K4',
        name: "Buku",
        price: 15000,
    }
]

function addRow() {
    var table = $("#table tbody");
    var newRow = `
    <tr>
      <td class="td-code">
        <input type="text" name="item_code">
      </td>
      <td class="td-name">
        -
      </td>
      <td class="td-price">
        -
      </td>
      <td class="td-quantity">
        <input type="number" name="item_qty">
      </td>
      <td class="td-subtotal">
        Rp 0
      </td>
      <td>
        <input type="button" class="remove-row" value="X">
      </td>
    </tr>
    `;
    table.append(newRow);
}

$('#table').on('keyup', 'input[name=item_code]', function() {
    let itemCode = $(this).val();
    let item = items.find(item => item.id === itemCode);

    if (item) {
        let tdName = $(this).parent().parent().find('.td-name');
        let tdPrice = $(this).parent().parent().find('.td-price');
        tdName.html(item.name);
        tdPrice.html(item.price);
    }
});

$('#table').on('keyup', 'input[name=item_qty]', function() {
    calculateTotal();
});

$('#table').on('click', '.remove-row', function() {
    $(this).parent().parent().remove();
    calculateTotal();
});

function calculateTotal() {
    let table = $("#table tbody");
    let grandtotal = 0;
    table.find('tr').each(function() {
        let price = $(this).find('.td-price').html();
        let qty = $(this).find('.td-quantity input').val();
        let subtotal = price * qty;
        $(this).find('.td-subtotal').html('Rp ' + subtotal);
        grandtotal += subtotal;
    });
    $('#grand-total').html('Rp ' + grandtotal);
}