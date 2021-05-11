enum Category{A , B, C, D , E};
interface BlogPost{
    id : String,
    title : String,
    content : String,
    date : String,
    category : Category,
    authorId : Number
}
interface Image{
    image : string
}
const BP1 : BlogPost =  {
    id : "id1",
    title : "title1",
    content : "content1",
    date : "12 - 01 - 2021",
    category : Category.A,
    authorId : 123
}
const BP2 : BlogPost =  {
    id : "id2",
    title : "title2",
    content : "content2",
    date : "12 - 01 - 2021",
    category : Category.B,
    authorId : 124
}
const BP3 : BlogPost =  {
    id : "id3",
    title : "title3",
    content : "content3",
    date : "12 - 01 - 2021",
    category : Category.C,
    authorId : 125
}
type BlogPostWithImage = BlogPost & Image; //should have all the properties of both interfaces
type BlogPostWithImage1 = BlogPost | Image; // should have only common properties of both interfaces
const blogpostwithimage : BlogPostWithImage = {
    id : "123",
    title : "title1",
    content : "cnt1",
    date : "1 march 2021",
    category : Category.E,
    authorId : 124,
    image : "Hey"
};
const blogpostwithimage1 : BlogPostWithImage1 = {
    id : "123",
    title : "title1",
    content : "cnt1",
    date : "1 march 2021",
    category : Category.E,
    authorId : 124,
    image : "Hey"
};






