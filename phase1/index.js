var Category;
(function (Category) {
    Category[Category["A"] = 0] = "A";
    Category[Category["B"] = 1] = "B";
    Category[Category["C"] = 2] = "C";
    Category[Category["D"] = 3] = "D";
    Category[Category["E"] = 4] = "E";
})(Category || (Category = {}));
;
var BP1 = {
    id: "id1",
    title: "title1",
    content: "content1",
    date: "12 - 01 - 2021",
    category: Category.A,
    authorId: 123
};
var BP2 = {
    id: "id2",
    title: "title2",
    content: "content2",
    date: "12 - 01 - 2021",
    category: Category.B,
    authorId: 124
};
var BP3 = {
    id: "id3",
    title: "title3",
    content: "content3",
    date: "12 - 01 - 2021",
    category: Category.C,
    authorId: 125
};
var blogpostwithimage = {
    id: "123",
    title: "title1",
    content: "cnt1",
    date: "1 march 2021",
    category: Category.E,
    authorId: 124,
    image: "Hey"
};
var blogpostwithimage1 = {
    id: "123",
    title: "title1",
    content: "cnt1",
    date: "1 march 2021",
    category: Category.E,
    authorId: 124,
    image: "Hey"
};
