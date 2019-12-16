import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {exampleData} from '../../data/example';
import {JSONService} from '../../services/json.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
  @Input() actionType: 'merge' | 'overwrite' | 'difference';
  sm = new SubscriptionManager();
  form: FormGroup;
  master: object;
  slave: object;
  differencesSlaveVersusMaster: object;
  differencesMasterVersusSlave: object;
  overwritten: object;
  overwrittenText: string;
  spacingOptions = [
    {value: 2, name: 'Two spaces'}, {value: 4, name: 'Four spaces'}, {value: '\t', name: 'Tabs'}
  ];

  constructor(private fb: FormBuilder, private service: JSONService) {
    this.form = fb.group({
      master: new FormControl(JSON.stringify(exampleData.from)),
      slave: new FormControl(JSON.stringify(exampleData.to)),
      spacing: new FormControl(2)
    });
  }

  ngOnInit() {
    this.sm.add(this.form.valueChanges, ({master, slave}) => {
      try {
        this.master = JSON.parse(master);
        this.slave = JSON.parse(slave);
        this.setDifferencesAndMerge();
        this.setOverwrittenText();
      } catch (e) {
        console.error(e);
      }
    });
  }

  ngOnDestroy(): void {
    this.sm.unsubscribe();
  }

  addToClipboard(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.overwrittenText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  private setDifferencesAndMerge() {
    switch (this.actionType) {
      case 'overwrite':
        this.overwritten = this.service.overwrite(this.master, this.slave);
        break;
      case 'merge':
        this.overwritten = this.service.merge(this.master, this.slave);
        break;
      default:
        this.overwritten = undefined;
        break;

    }

    this.differencesSlaveVersusMaster = this.service.getDifferences(this.master, this.slave);
    this.differencesMasterVersusSlave = this.service.getDifferences(this.slave, this.master);
  }

  private setOverwrittenText() {
    this.overwrittenText = JSON.stringify(this.overwritten, null, this.form.value.spacing);
  }
}
