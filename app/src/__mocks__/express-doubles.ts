import { NextFunction, Response } from "express";

export const expressMocks = {
  nextFunction: jest.fn() as jest.MockedFunction<NextFunction>,
};

export const expressSpies = {
  response: {
    status: jest.fn().mockReturnThis(),
    location: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  } as Partial<Response> as jest.MockedObject<Response>,
};