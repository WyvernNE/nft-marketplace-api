import NFTService from "../../services/nft";
import { NextFunction, Request, Response } from "express";
import { validationGetNFTs, validationGetNFT, validationGetStatNFTsUser, validationNFTsBySeries, validationGetSeries, validationCanAddToSeries, validationGetHistory, validationAddCategoriesNFTs } from "../../validators/nftValidators";

export class Controller {
  async getNFTs(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryValues = validationGetNFTs(req.query)
      res.json(await NFTService.getNFTs(queryValues));
    } catch (err) {
      next(err);
    }
  }

  async getNFT(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const queryValues = validationGetNFT({...req.params, ...req.query})
      res.json(await NFTService.getNFT(queryValues));
    } catch (err) {
      next(err);
    }
  }

  async getStatNFTsUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryValues = validationGetStatNFTsUser({...req.params, ...req.query})
      res.json(await NFTService.getStatNFTsUser(queryValues));
    } catch (err) {
      next(err);
    }
  }
  
  async getNFTsBySeries(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>{
    try {
      const queryValues = validationNFTsBySeries(req.query)
      res.json(await NFTService.getNFTsForSeries(queryValues));
    } catch (err) {
      next(err);
    }
  }

  async addCategoriesNFTs(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const queryValues = validationAddCategoriesNFTs(JSON.parse(req.body))
      res.json(await NFTService.addCategoriesNFTs(queryValues));
    } catch (err) {
      next(err);
    }
  }

  async getSeriesStatus(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>{
    try {
      const queryValues = validationGetSeries(req.params)
      res.json(await NFTService.getSeriesStatus(queryValues));
    } catch (err) {
      next(err);
    }
  }

  async canAddToSeries(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>{
    try {
      const queryValues = validationCanAddToSeries(req.query)
      res.json(await NFTService.canAddToSeries(queryValues));
    } catch (err) {
      next(err);
    }
  }
  
  async getHistory(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>{
    try {
      const queryValues = validationGetHistory({...req.query, ...req.params})
      res.json(await NFTService.getHistory(queryValues));
    } catch (err) {
      next(err);
    }
  }
}

export default new Controller();
