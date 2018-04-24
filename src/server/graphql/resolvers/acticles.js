// @flow
import { Article } from "src/server/models"

export const query = {

  articles: async (root: any, args: any, ctx: any) => {
    const acticles = await Article.findAll()

    return acticles
  },

  article: async (root: any, args: any, ctx: any) => {
    const article = await Article.findById(args.id)

    return article
  },

}

export const mutation = {

  createArticle: async (root: any, args: any, ctx: any) => {
    const article = await Article.create(args.input)
    return article
  },

  updateArticle: async (root: any, args: any, ctx: any) => {
    const article = await Article.findById(args.input.id)

    await article.set(args.input)
    await article.save()

    return article
  },

  deleteArticle: async (_: any, args: any, ctx: any) => {
    const article = await Article.findByIdAndRemove(args.input.id)
    return article
  },

}
