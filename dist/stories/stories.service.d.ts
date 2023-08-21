import { Repository } from 'typeorm';
import { Story } from './entities/story.entity.ts';
export declare class StoriesService {
    private storyRepository;
    storiesService: any;
    constructor(storyRepository: Repository<Story>);
    create(story: Story): Promise<Story>;
    findAll(): Promise<Story[]>;
    findOne(id: any): Promise<Story>;
    update(id: string, updateData: Partial<Story>): Promise<Story>;
    delete(id: string): Promise<void>;
}
