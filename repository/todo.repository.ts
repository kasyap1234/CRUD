// todo.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from '../src/todos/todo.model'; 

import { AbstractRepository } from './abstract.repository';


@Injectable()
export class TodoRepository extends AbstractRepository<TodoDocument> {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {
    super(todoModel);
  }

  async findAll(): Promise<TodoDocument[]> {
    return this.todoModel.find().exec();
  }

  async findById(id: string): Promise<TodoDocument | null> {
    return this.todoModel.findById(id).exec();
  }

  async create(todo: Todo): Promise<TodoDocument> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async update(id: string, todo: Partial<Todo>): Promise<TodoDocument | null> {
    const updatedTodo = await this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
    return updatedTodo || null;
  }

  async delete(id: string): Promise<TodoDocument | null> {
    return this.todoModel.findByIdAndRemove(id).exec();
  }

 
}

