import { Module } from '@nestjs/common';
import { PlantModule } from './Infrastructure/modules/plants.module';

@Module({
  // Imports
  // Other modules that this module depends on
  imports: [PlantModule],
  // Controllers
  // Controllers are responsible for handling incoming requests and returning responses to the client.
  // It is important to have 1 Controller for 1 route for maintainability.
  controllers: [],
  // Providers
  // Services that will be available within this module
  // and will be injected by NestJS
  providers: [],
  // Exports
  // Services that will be available to other modules
  exports: [],
})
export class AppModule {}
