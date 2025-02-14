
import { AfterViewInit, Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DirectoryService } from '../../../home/routes/my-content/services/directory.services'
// import { RolesAccessService } from '../../services/roles-access.service'
@Component({
  selector: 'ws-app-roles-access',
  templateUrl: './roles-access.component.html',
  styleUrls: ['./roles-access.component.scss'],
})
export class RolesAccessComponent implements OnInit, AfterViewInit, OnDestroy {
  tabledata: any = []
  data: any = []
  deparmentId!: string
  deparmentName!: string
  @Output() clickedDepartment = new EventEmitter<string>()
  constructor(private directoryService: DirectoryService, private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.deparmentId = params['roleId']
      this.deparmentName = params['depatName']
    })
  }

  ngOnInit() {
    this.tabledata = {
      columns: [
        { displayName: 'Role', key: 'role' },
        { displayName: 'Number of users', key: 'count' },
      ],
      needCheckBox: false,
      needHash: false,
      sortColumn: '',
      sortState: 'asc',
    }
    this.fetchRoles()
  }

  ngAfterViewInit() {
    // this.elementPosition = this.menuElement.nativeElement.parentElement.offsetTop
  }

  /* Click event to navigate to a particular role */
  onRoleClick(clickedData: any) {
    this.clickedDepartment.emit(clickedData.role)
  }

  /* API call to get all roles*/
  fetchRoles() {

    const rolesAndAccessData: any[] = []
    this.directoryService.getAllDepartments().subscribe(res => {
      res.forEach((dept: { id: number, rolesInfo: any }) => {
        if (dept.id === parseInt(this.deparmentId, 10)) {
          dept.rolesInfo.forEach((role: { roleName: string, noOfUsers: string }) => {
            rolesAndAccessData.push({
              role: role.roleName,
              count: role.noOfUsers,
            })

          })
        }
      })
      this.data = rolesAndAccessData
    })
  }

  ngOnDestroy() {
  }
}
