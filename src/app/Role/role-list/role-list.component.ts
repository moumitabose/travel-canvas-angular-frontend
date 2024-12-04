import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['sl', 'roleid', 'rolename', 'activeflag', 'createby', 'createdt',
    'modby', 'moddt','actions'];
  dataSource!: MatTableDataSource<any>;
  addedTableData: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
