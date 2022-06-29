const provinces = [{
        province: 'Jawa Barat',
        cities: [{
                city: 'Bogor',
                districts: [
                    'Pasir Kuda',
                    'Cipaku'
                ],
            },
            {
                city: 'Cianjur',
                districts: [
                    'Agrabinta',
                    'Bojongpicung'
                ],
            },
        ]
    },
    {
        province: 'Jawa Timur',
        cities: [{
                city: 'Surabaya',
                districts: [
                    'Asemrowo',
                    'Benowo',
                ],
            },
            {
                city: 'Mojokerto',
                districts: [
                    'Bangsal',
                    'Dawarblandong'
                ]
            },
        ]
    }
];

function init() {
    $.each(provinces, function(index, province) {
        $('#province').append($('<option>', {
            value: index,
            text: province.province
        }));
    });
}

init();

$('#province').change(function() {
    if ($(this).val() === 'Pilih-Provinsi') {
        $('#city').empty();
        return $('#city').append('<option>Pilih-kota</option>');
    }
    let provinceIndex = $(this).val();
    let province = provinces[provinceIndex];
    let cities = province.cities;
    $('#city').empty();
    $('#city').append('<option>Pilih-Kota</option>');
    $.each(cities, function(index, city) {
        $('#city').append($('<option>', {
            value: index,
            text: city.city
        }));
    });
});

$('#city').change(function() {
    if ($(this).val() === 'Pilih-Provinsi') {
        $('#district').empty();
        return $('#district').append('<option>Pilih-Kecamatan</option>');
    }
    let provinceIndex = $('#province').val();
    let province = provinces[provinceIndex];
    let cities = province.cities;
    let cityIndex = $(this).val();
    let city = cities[cityIndex];
    let districts = city.districts;
    $('#district').empty();
    $('#district').append('<option>Pilih-Kecamatan</option>');
    $.each(districts, function(index, district) {
        $('#district').append($('<option>', {
            value: index,
            text: district
        }));
    });
});