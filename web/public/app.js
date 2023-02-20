$('#navbar').load('navbar.html');
$('#footer').load('footer.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];
localStorage.setItem('devices', JSON.stringify(devices));

devices.forEach(function (device) {
  $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
  );
});

$('#add-device').on('click', function () {
  const user = $('#user').val();
  const name = $('#name').val();
  devices.push({ user: user, name: name });
  console.log(devices);
  location.href = '/';
  localStorage.setItem('devices', JSON.stringify(devices));
});