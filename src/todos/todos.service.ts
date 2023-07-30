// todos.service.ts
import { Injectable } from '@nestjs/common';
import { Todo, TodoDocument } from './todo.model'; // Import TodoDocument
import {model} from 'mongoose'; 

import { AbstractRepository } from '../../repository/abstract.repository';


@Injectable()
export class TodosService {
  constructor(private readonly abstractRepository: AbstractRepository<TodoDocument>) {}

  async findAll(): Promise<Todo[]> {
    return this.abstractRepository.findAll();
  }

  async findOne(id: string): Promise<Todo | null> {
    return this.abstractRepository.findById(id);
  }

  async create(todo: Todo): Promise<Todo> {
    const todoDocument: TodoDocument = Object.assign(new this.abstractRepository.model(), todo);
    return this.abstractRepository.create(todoDocument);
  }

  async update(id: string, todo: Partial<Todo>): Promise<Todo | null> {
    return this.abstractRepository.update(id, todo);
  }

  async delete(id: string): Promise<Todo | null> {
    return this.abstractRepository.delete(id);
  }

  
  

 
}


