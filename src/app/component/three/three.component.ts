import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-three',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './three.component.html',
  styleUrl: './three.component.scss'
})
export class UserlistComponent{
  users: users[] = [
    { name: 'John Doe', job: 'Software Engineer', avatar: '', tags: ['Angular', 'TypeScript'] },
    { name: 'Jane Smith', job: 'Product Manager', avatar: '', tags: ['React', 'JavaScript'] },
    { name: 'Mike Johnson', job: 'Frontend Developer', avatar: '', tags: ['Vue.js', 'Sass'] },
    { name: 'Alice Brown', job: 'UI/UX Designer', avatar: '', tags: ['Figma', 'Design'] },
    { name: 'David Wilson', job: 'Data Scientist', avatar: '', tags: ['Python', 'Machine Learning'] },
    { name: 'Emma White', job: 'DevOps Engineer', avatar: '', tags: ['Docker', 'Kubernetes'] }
  ];
}
interface users {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}

