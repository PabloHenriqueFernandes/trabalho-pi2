$(function() {

  // $.ajax({
  //   url: 'http://localhost:3333/shirts/6',
  //   method: 'GET',
  //   success: function(data) {
  //     console.log(data);

  //     const html = `
  //       <div>
  //         <img src="${data.url}" />
  //         <span>${data.name}</span>
  //       </div>
  //     `;
  //     $('#shirt').html(html);
  //   },
  //   error: function(err) {
  //     console.log(err);
  //   }
  // })

  $('#form_shirts')
  .submit(function(e) {
    e.preventDefault();
    const data = new FormData(this);
    $.ajax({
      url: 'http://localhost:3333/shirts',
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      method: 'POST',
      success: function(data){
        console.log(data);
      }
  });;
  });
});