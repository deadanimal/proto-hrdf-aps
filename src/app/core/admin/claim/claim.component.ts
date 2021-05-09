import {
  Component,
  OnInit,
  NgZone,
  OnDestroy,
  TemplateRef,
} from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import swal from "sweetalert2";
import { BsModalRef, BsModalService } from "ngx-bootstrap";

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox",
}

@Component({
  selector: "app-claim",
  templateUrl: "./claim.component.html",
  styleUrls: ["./claim.component.scss"],
})
export class ClaimComponent implements OnInit {
  //datepicker
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  // Modal
  modalRef: BsModalRef;
  modalConfig = {
    keyboard: true,
    class: "modal-dialog-centered",
  };

  //table
  entries: number = 5;
  selected: any[] = [];
  temp = [];
  activeRow: any;
  rows: any = [
    {
      accNo: "ACC-719-MOX",
      debit: "849.19",
      credit: "754.16",
      netMove: "595.03",
      dateTrans: "2009/01/12",
      dateAppli: "2011/07/25",
      dateAppro: "2011/04/25",
      salary: "$320,800",
      name: "John",
      status: "active",
      type: "Full time",
      moreInfo: "Blue-cheeked cordon",
      category: "1",
      year: "2011",
    },
    {
      accNo: "ACC-649-LVT",
      debit: "919",
      credit: "703",
      netMove: "562",
      dateTrans: "2012/03/29",
      dateAppli: "2011/05/23",
      dateAppro: "2011/07/25",
      salary: "$433,060",
      name: "Sara",
      status: "active",
      type: "Part time",
      moreInfo: "Pelican, australian",
      category: "3",
      year: "2019",
    },
    {
      accNo: "ACC-119-VLJ",
      debit: "785.51",
      credit: "795.16",
      netMove: "314.71",
      dateAppro: "2011/07/25",
      dateTrans: "2008/11/28",
      dateAppli: "2009/01/12",
      salary: "$170,750",
      name: "Cheng Hong",
      status: "unactive",
      type: "Full time",
      moreInfo: "Blue-cheeked cordon",
      category: "2",
      year: "2011",
    },
  ];

  constructor(private zone: NgZone, private modalService: BsModalService) {
    this.temp = this.rows.map((prop, key) => {
      return {
        ...prop,
        id: key,
      };
    });
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  ngOnInit() {}

  successSwal(task) {
    swal.fire({
      title: "Success",
      text: "Successfully " + task + "!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
    });
    this.modalRef.hide();
  }

  entriesChange($event) {
    this.entries = $event.target.value;
  }
  filterTable($event) {
    let val = $event.target.value;
    this.temp = this.rows.filter(function (d) {
      for (var key in d) {
        if (d[key].toLowerCase().indexOf(val) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
  onActivate(event) {
    this.activeRow = event.row;
  }

  openModal(modalRef: TemplateRef<any>) {
    this.modalRef = this.modalService.show(modalRef, this.modalConfig);
  }

  delete() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure want to delete this data?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.doneDelete();
        }
      });
  }

  doneDelete() {
    swal.fire({
      title: "Success",
      text: "The data has been deleted!",
      type: "success",
      buttonsStyling: false,
      confirmButtonClass: "btn btn-success",
      confirmButtonText: "Close",
    });
  }
}
