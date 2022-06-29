function addRow() {
    let table = $("#table tbody");
    let newRow = `
      <tr>
        <td>
        <select name="nama_barang" id="nama_barang-tr-1">
          <option value="">Pilih Barang</option>
          <option value="Meja">Meja</option>
          <option value="Kursi">Kursi</option>
          <option value="Buku">Buku</option>
        </select>
        </td>
        <td>
          <input type="number" name="jumlah" id="jumlah-tr-1">
        </td>
        <td>
          <input type="number" name="harga" id="harga-tr-1">
        </td>
        <td>
          <input type="button" class="remove-row" value="X">
        </td>
      </tr>
    `;
    table.append(newRow);
}

$('#table').on('click', '.remove-row', function() {
    $(this).parent().parent().remove();
})