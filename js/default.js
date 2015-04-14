$(document).ready(function() {
  localStorage.setItem('user', true);

  var send_email = function(email, fn) {
    $.post('http://roose.kz/invite.php', {email: email}, function(data) {
      if (data.success) {
        fn(null);
      } else {
        console.log(data.success);
        return fn('Ой, слак сломался!');
      }
    })
    .fail(function() {
      return fn('Ой, ну-ка еще раз!');
    });
  };

  $('form').on('submit', function(event) {
    event.preventDefault();

    var is_user = localStorage.getItem('user');
    var email = $('input[type="email"]');
    var submit = $('input[type="submit"]');

    if (is_user) {
      submit.prop('disabled', true);
      submit.val('Ща попробую...');

      send_email(email.val(), function(err){
        if (err) {
          submit.prop('disabled', false);
          submit.addClass('button-error');
          submit.val(err);
        } else {
          submit.addClass('button-success');
          submit.val('Авесоме! Проверяй почту!');
        }
      });
    }
  });
});