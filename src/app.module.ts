

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://dadou:12345@cluster0.wss50rs.mongodb.net/',
     {
    }),
    TodosModule,
  ],
})
export class AppModule {}
