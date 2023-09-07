import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector:'app-home',
    templateUrl: "./home.component.html"
})
export class HomeComponent{
    ToDo = [
        {
            "name":"task 1",
            "content":"content 1"
        },
        {
            "name":"task 2",
            "content":"content 2"
        },
        {
            "name":"task 3",
            "content":"content 3"
        },
        {
            "name":"task 4",
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

}