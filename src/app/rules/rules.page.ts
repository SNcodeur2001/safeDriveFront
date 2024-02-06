import { Component, OnInit } from '@angular/core';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
})
export class RulesPage implements OnInit {
  rules: any[] = [];
  constructor(private rulesService: RulesService) { }

  ngOnInit() {
    this.loadRules();
  }

  loadRules() {
    this.rulesService.getRules().subscribe((data) => {
      this.rules = data;
    });
  }
}
