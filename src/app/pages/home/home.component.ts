import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent{
    ToDo = [
        {
            "name":"Task 1",
            "content":"content 1"
        },
        {
            "name":"Task 3",
            "content":"content 2"
        },
        {
            "name":"task 10",
            "content":"content 3"
        },
        {
            "name":"task 20",
            "content":"content 4"
        }
    ]
    InProgress = [
        {
            "name":"task 5",
            "content":"content 1"
        },
        {
            "name":"task 6",
            "content":"content "
        },
        {
            "name":"task 7",
            "content":"content 3"
        },
        {
            "name":"task 8",
            "content":"content 4"
        }
    ]

    InReview = [
        {
            "name":"task 5",
            "content":"content 1"
        },
        {
            "name":"task 6",
            "content":"content "
        },
        {
            "name":"task 7",
            "content":"content 3"
        },
        {
            "name":"task 8",
            "content":"content 4"
        }
    ]

    Done = [
        {
            "name":"task 5",
            "content":"content 1"
        },
        {
            "name":"task 6",
            "content":"content "
        },
        {
            "name":"task 7",
            "content":"content 3"
        },
        {
            "name":"task 8",
            "content":"content 4"
        }
    ]

}