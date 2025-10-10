export function pageTitle(title: string): string {
    const baseTitle = 'My Awesome App';

    return title ? `${title} - ${baseTitle}` : baseTitle;
}
