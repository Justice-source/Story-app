import { Controller, Get, Post, Put, Body, Patch, Param, Delete, HttpStatus, Res  } from '@nestjs/common';
import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './stories.module';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}


  @Post()
  async create(@Res() response, @Body() body: CreateStoryDto) : Promise<CreateStoryDto> {
    const newStory =  await this.storiesService.create(body)
    return response.status(HttpStatus.CREATED).json({newStory})

  }

  @Get()
  findAll() {
    return this.storiesService.findAll();
  }

  

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.storiesService.findOne(+id);
  }


  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Story>): Promise<Story> {
    return this.storiesService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.storiesService.delete(id);
  }

}
