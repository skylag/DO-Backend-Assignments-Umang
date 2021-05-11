class BlogPostRepository{
    save(BP1 : BlogPost) : Promise<{}>{
        return new Promise((resolve: any, reject : any) => {
            setTimeout(() => {

            }, 2000);
        });
    }
    delete(BP1 : BlogPost){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                
            }, 2000);
        });
    }
    getAll(){
        return new Promise((resolve,reject) => {
            setTimeout(() => {

            } , 2000) ;
        });
    }

}
