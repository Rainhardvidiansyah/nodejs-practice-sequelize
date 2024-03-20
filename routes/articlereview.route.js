const express = require('express');
const router = express.Router();
const ArticleController = require('../controller/articlereviewcontroller')

class ArticleRoute{
    constructor(){
    this.route = router;
    this.initRoute();
    }
    initRoute(){
        this.route.post('/create', this.postArticleReview);
        this.route.get('/all', this.getAllArticleReviews);
        this.route.get('/:id', this.getById)
    }

    async postArticleReview(req, res){
        try {
            const articleReview = req.body;
            const {title, author} = articleReview;
            await ArticleController.createArticleReview(title, author);
            console.log(articleReview);
            res.status(201).json({
                message: "Article review saved successfully"
            });           
        } catch (error) {
            console.log(error);
            res.status(500).json(
                {
                message: error,
                tambahan: "Ada kesalahan dalam metode ini!"
            });   
        }}

    async getAllArticleReviews(req, res){
        try {
            const articleReviews = await ArticleController.findAllArticleReview();
            console.log('Article review just retrieved ::>> Route');
            res.status(200).json(articleReviews);
        } catch (error) {
            res.status(404).json(
                { 
                    error: error.message, 
                    tambahan: "Article review not found"
                })
        }}

        async getById(req, res){
            try{
            const param_id = req.params.id;
            const articleId = await ArticleController.findByPk(param_id);
            if(articleId == null){
                res.status(404).json({message: "Article review not found"});
            }
            res.status(200).json(articleId);
            //console.log(articleId);
            }catch(error){
                console.log(error);
                res.status(500).json({message: "Article review not found"});
            }}
}

module.exports = new ArticleRoute().route;


