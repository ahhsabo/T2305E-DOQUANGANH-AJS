import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
@Component({
    selector: 'app-home',
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    ToDo = [{ "name": "task 1", "content": "Analyze the new requirements gathered from the customer" }, { "name": "task 2", "content": "Improve application performance" }, { "name": "task 3", "content": "Arrange a web meeting with the customer to get new requirements" }, { "name": "task 4", "content": "Fix the issues reported in the IE browser" }]
    InProgress = [{ "name": "task 5", "content": "Fix the issues reported by the customer" }, { "name": "task 6", "content": "Fix the issues reported in Safari browser" }, { "name": "task 7", "content": "Test the application in the IE browser" }, { "name": "task 8", "content": "Analyze SQL server 2008 connection" }]

    InReview = [{ "name": "task 1", "content": "Analyze the new requirements gathered from the customer" }, { "name": "task 2", "content": "Improve application performance" }, { "name": "task 3", "content": "Arrange a web meeting with the customer to get new requirements" }, { "name": "task 4", "content": "Fix the issues reported in the IE browser" }]
    Done = [{ "name": "task 5", "content": "Fix the issues reported by the customer" }, { "name": "task 6", "content": "Fix the issues reported in Safari browser" }, { "name": "task 7", "content": "Test the application in the IE browser" }, { "name": "task 8", "content": "Analyze SQL server 2008 connection" }]


}