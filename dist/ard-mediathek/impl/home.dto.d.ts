export declare class HomeDto {
    data: {
        defaultPage: {
            id: string;
            title: string;
            widgets: [{
                id: string;
                title: string;
                links: {
                    self: {
                        href: string;
                    };
                };
            }];
        };
    };
}
