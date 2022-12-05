

function manejaPeticionesApi( nombreCache, req){

    return fetch( req ).then( res => {

        if(res.ok){

            caches.open( nombreCache ).then(cache =>{
                cache.put( req, res.clone() );
            });

            return res.clone();
        }else{
            return caches.match( req );
        }

    })
    .catch(error => {
        return caches.match( req );
    })
}