import 'reflect-metadata'
import { Container } from 'inversify'
import { FavoriteStorage } from '../services/localService/favorites_service'


let container = new Container();
container.bind(FavoriteStorage).toSelf().inSingletonScope();

export {container} 