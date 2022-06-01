export default interface ARFilter {
    id: string;
    filterName: string;
    resourceLink: string;
    rating: number;
    description: string;
    createdAt: string;
    premium: boolean;
    categories: string[];
    views: number;
}
