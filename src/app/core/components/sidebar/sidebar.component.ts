import { Component } from '@angular/core';

interface MenuItem {
    name: string;
    urlPath: string;
    iconPath: string[];
    classStyle: string;
    disabled: boolean;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
    menuItems: MenuItem[] = [
        {
            name: 'Dashboard',
            urlPath: '/dashboard',
            iconPath: [
                'M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z',
                'M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z',
            ],
            classStyle: 'bi bi-grid',
            disabled: true,
        },
        {
            name: 'Inbox',
            urlPath: '/chat',
            iconPath: [
                'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z',
            ],
            classStyle: 'bi bi-chat-left-dots-fill',
            disabled: true,
        },
    ];

    constructor() {}
}
