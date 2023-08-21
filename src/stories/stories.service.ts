import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story} from './entities/story.entity.ts';
 
@Injectable()
export class StoriesService {
  create(body: CreateStoryDto) {
    throw new Error('Method not implemented.');
  }
  storiesService: any;

  constructor(
    @InjectRepository(Story)
    private storyRepository: Repository<Story>,
  ) {} 

  async createStory(createStoryDto: CreateStoryDto): Promise<Story> {
    const newStory = new Story();
    newStory.name = createStoryDto.name;
    newStory.desc = createStoryDto.desc;
    // You might need to set other properties as well

    return this.storyRepository.save(newStory);
  }


  findAll() {
    return this.storyRepository.find()
  }


  async findOne(id): Promise<Story> {
    return await this.storyRepository.findOne({where: {id}})
  }



  async update(id: number, updateData: Partial<Story>): Promise<Story> {
    const product = await this.storyRepository.findOneBy({id});
    Object.assign(product, updateData); // Update product fields with the new data
    return this.storyRepository.save(updateData); // Save the updated product to the database
  }

 
  
  async delete(id: number): Promise<void> {
    const story = await this.storyRepository.findOneBy({id});
    if (!story) {
      throw new NotFoundException('Story not found');
    }
    await this.storyRepository.remove(story);
    
  }
}
