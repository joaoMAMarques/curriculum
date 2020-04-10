import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createGitgraph} from '@gitgraph/js';

@Component({
  selector: 'cod-contact-technologies',
  templateUrl: './contact-technologies.component.html',
  styleUrls: ['./contact-technologies.component.scss']
})
export class ContactTechnologiesComponent implements OnInit, AfterViewInit {
  @ViewChild('graphContainer') graphContainer: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log(this.graphContainer.nativeElement);
    const gitgraph = createGitgraph(this.graphContainer.nativeElement);
    // Simulate git commands with Gitgraph API.
    const master = gitgraph.branch('master');
    master.commit('Initial commit');

    const develop = gitgraph.branch('develop');
    develop.commit('Add TypeScript');

    const aFeature = gitgraph.branch('a-feature');
    aFeature
      .commit('Make it work')
      .commit({subject: 'Make it right', hash: 'test'})
      .commit('Make it fast');

    develop.merge(aFeature);
    develop.commit('Prepare v1');

    master.merge(develop).tag('v1.0.0');
  }

}
