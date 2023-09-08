import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector: 'app-home',
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
 ToDo = [
        {
            "name":"Task 1",
            "content":"Analyze the new requirements gathered from the customer."
        },
        {
            "name":"Task 3",
            "content":"Arrange a web meeting with the customer to get new requirements."
        },
        {
            "name":"Task 10",
            "content":"Show the retrieved data from the server in grid control."
        }
    ]

    InProgress = [
        {
            "name":"Task 2",
            "content":"Improve application performance."
        },
        {
            "name":"Task 4",
            "content":"Fix the issue reported in the IE browser."
        },
        {
            "name":"Task 11",
            "content":"Fix cannot open user's default database SQL error."
        },
        {
            "name":"Task 21",
            "content":"Improve the performance of the editing functionality."
        }
    ]

    InReview = [
        {
            "name":"Task 5",
            "content":"Fix the issue reported by the customer."
        },
        {
            "name":"Task 7",
            "content":"Fix the issue reported in Safari browser."
        },
        {
            "name":"Task 12",
            "content":"Fix the issue reported in data binding."
        },
        {
            "name":"Task 19",
            "content":"Test editing functionality."
        }
    ]

    Done = [
        {
            "name":"Task 8",
            "content":"Test the application in the IE browser."
        },
        {
            "name":"Task 13",
            "content":"Analyze SQL server 2008 connection."
        },
        {
            "name":"Task 15",
            "content":"Analyze grid control."
        },
        {
            "name":"Task 16",
            "content":"Stored procedure for intial data binding of the grid."
        }
    ]

}