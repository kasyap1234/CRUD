

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.model';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoModel.findById(id).exec();
  }

  async create(todo: Todo): Promise<Todo> {
    const createdTodo = new this.todoModel(todo);
    return createdTodo.save();
  }

  async update(id: string, todo: Todo): Promise<Todo> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
  }

  async delete(id: string): Promise<Todo> {
    return this.todoModel.findByIdAndRemove(id).exec();
  }
}
