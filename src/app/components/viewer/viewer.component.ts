import {Component, OnDestroy, OnInit} from '@angular/core';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {JSONService} from '../../services/json.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {
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
      master: new FormControl(),
      slave: new FormControl(),
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
      console.log('Differences', {
        slave: this.differencesSlaveVersusMaster, master: this.differencesMasterVersusSlave
      });
    });
    this.service.loadMockFile(0)
      .then(data => this.form.controls.master.setValue(JSON.stringify(data)));
    this.service.loadMockFile(1)
      .then(data => this.form.controls.slave.setValue((JSON.stringify(data))));
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
    this.differencesSlaveVersusMaster = this.service.getDifferences(this.master, this.slave);
    this.differencesMasterVersusSlave = this.service.getDifferences(this.slave, this.master);
    this.overwritten = this.service.merge(this.master, this.slave);
  }

  private setOverwrittenText() {
    this.overwrittenText = JSON.stringify(this.overwritten, null, this.form.value.spacing);
  }
}
