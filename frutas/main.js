//div Detalhes
$('.card').on( "mousemove mouseleave", function( event ) {
       var divid = "#detalhes";
   if(event.type == "mouseleave"){
      $(divid).hide();
   }else{
      var divid_height = $(divid).height(); // altura da div
      var scrolTop = $(window).scrollTop(); // scroll da janela
      $(divid).css({
         top: event.clientY-divid_height+scrolTop,
         left: event.clientX+5
      }).show();
   }
 })
    
 $('.card').on('click',function(){
     window.location="index.html";
     //window.open("http://livecoding.tv");
 })
//fim div detalhes
//--------------------------------------------------------------------------------------------------//
 
    let navLink = $('.barra-animada');//seleciono o que eu quero que tenha scroll animado
    
    navLink.on('click',function(e){
        e.preventDefault(); //tiro o comportamento padrão, que é ir direto pra onde cliquei
          let href = $(this).attr('href'); //pego o elemento href de onde cliquei
          let alvo = $(href); //alvo, pra onde eu quero ir
          let pos = alvo.position().top; //pega a posição do top de onde quero ir 
          
          $('html, body').animate({scrollTop: pos}, 1500); //animo o scroll
    })