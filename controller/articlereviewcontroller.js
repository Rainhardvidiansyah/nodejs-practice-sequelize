const {Op} = require('sequelize')
const {ArticleReview} = require ('../model/article.review')

class ArticleController {
    constructor(){
    }

   async createArticleReview(title, author){
        try {
          const createArticleReview = await ArticleReview.create({
                title: title,
                author: author
            })
            console.log(createArticleReview)
            return createArticleReview
        } catch (error) {
            console.log(error);
        }
    console.log(`save article with title ${title} from ${author}`);
    }

    async findAllArticleReview(){
        try {
            const articles = await ArticleReview.findAll();
            console.log("articles data just been retrieved ::>> Controller");
            console.log(articles)
            return articles
        } catch (error) {
            console.log(error);
        }}

    async findByPk(id){
        try {
            const article = await ArticleReview.findByPk(id);
            const data = article.id;
            //console.log(`Just retrieved article id: ${data}`);
            console.log(article.title);
            return article;
        } catch (error) {
            console.log("Id not found");
        }}

    async deleteById(id){
        try {
            await ArticleReview.destroy({
            where: {
                id: id
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ArticleController();