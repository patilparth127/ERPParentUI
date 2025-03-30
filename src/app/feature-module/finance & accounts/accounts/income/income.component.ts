import { Component, OnInit, Renderer2 } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../../../../shared/data/data.service';
import {
  pageSelection,
  PaginationService,
  tablePageSize,  
} from '../../../../shared/custom-pagination/pagination.service';
import { accountIncomeModal, apiResultFormat } from '../../../../shared/model/pages.model';
interface data {
  name: string;
  code: string;
}

@Component({
    selector: 'app-income',
    templateUrl: './income.component.html',
    styleUrl: './income.component.scss',
    standalone: false
})
export class IncomeComponent {
  public routes = routes;
  invoiceNo: data[] | undefined;
  selectedinvoiceNo: data | undefined;
  sourceName: data[] | undefined;
  selectedsourceName: data | undefined;
  incomeName: data[] | undefined;
  selectedincome: data | undefined;
  paymentMethod: data[] | undefined;
  selectedMethod: data | undefined;
  selectedMethod1: data | undefined;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  initChecked = false;
  public pageSize = 10;
  public tableData: Array<accountIncomeModal> = [];
  public tableDataCopy: Array<accountIncomeModal> = [];
  public actualData: Array<accountIncomeModal> = [];
  public currentPage = 1;
  // pagination variables
  public skip = 0;
  public limit: number = this.pageSize;

  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<accountIncomeModal>;
  public searchDataValue = '';
  constructor(
    private renderer: Renderer2,
    private data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.data.getIncomeData().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.income) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
    
  }

  public handleApplyClick = () => {
    const modalElements = document.getElementsByClassName('drop-width');
    if (modalElements.length > 0) {
      for (let i = 0; i < modalElements.length; i++) {
        const modalElement = modalElements[i];
        this.renderer.removeClass(modalElement, 'show');
      }
    }
  };
  ngOnInit() {

    this.incomeName = [
      { name: 'April Month Fees', code: '1' },
      { name: 'STEM Program Grant', code: '2' },
      { name: 'Alumni Scholarship', code: '3' },
    ];
    this.sourceName = [
      { name: 'Tuition Fees', code: '1' },
      { name: 'Government Grants', code: '2' },
      { name: 'Donations', code: '3' },
    ];
    this.invoiceNo = [
      { name: 'INV681537', code: '1' },
      { name: 'INV681536', code: '2' },
      { name: 'INV681535', code: '3' },
    ];
    this.paymentMethod = [
      { name: 'Cash', code: '1' },
      { name: 'Credit', code: '2' },
    ];
    this.selectedMethod1 = this.paymentMethod[1];
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getIncomeData().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: accountIncomeModal, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.key = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<accountIncomeModal>(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        tableDataCopy: this.tableDataCopy,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }

  public sortData(sort: Sort) {
    const data = this.tableData.slice();
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public searchData(value: string): void {
    if (value == '') {
      this.tableData = this.tableDataCopy;
    } else {
      this.dataSource.filter = value.trim().toLowerCase();
      this.tableData = this.dataSource.filteredData;
    }
  }
  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f) => {
        f.isSelected = true;
      });
    } else {
      this.tableData.forEach((f) => {
        f.isSelected = false;
      });
    }
  }
}
