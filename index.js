$(document).ready(function(){
    
        const url= "https://jsonplaceholder.typicode.com/posts/1";
    const query = {
        key: 'AIzaSyACGyqUv-viv_3q6-j9_xFpJSKAcg_U5zk',
        part: 'snippet'
    }
    
  /* $.ajax({
       url: "http://thecatapi.com/api/images/get?format=xml&results_per_page=20",
        key: 'AIzaSyACGyqUv-viv_3q6-j9_xFpJSKAcg_U5zk',
        part: 'snippet'
   }).done(function(data){
       let json = xml2json(xml);
       console.log(json)  
   });
    */
    
    $.getJSON(url, function(data){
        console.log(data)
    })
    
    
})
    

    
