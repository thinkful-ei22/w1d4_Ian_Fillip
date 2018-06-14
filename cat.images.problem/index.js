function main(){
    $('.thumbnail').on('click', function(event){
        const imgSource = $(this).find('img').attr('src');
        console.log(imgSource);
        const imgAlt = $(this).find('img').attr('alt');
        $('.hero img').attr('src', imgSource).attr('alt', imgAlt);

    })

}

$(main);
