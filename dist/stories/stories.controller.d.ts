import { StoriesService } from './stories.service';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
export declare class StoriesController {
    private readonly storiesService;
    constructor(storiesService: StoriesService);
    create(response: any, body: CreateStoryDto): Promise<CreateStoryDto>;
    findAll(): Promise<import("./entities/story.entity").Story[]>;
    findOne(id: string): Promise<import("./entities/story.entity").Story>;
    update(id: string, updateStoryDto: UpdateStoryDto): Promise<import("./entities/story.entity").Story>;
    delete(id: string): Promise<void>;
}
