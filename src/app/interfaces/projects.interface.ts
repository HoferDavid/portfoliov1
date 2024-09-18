/**
 * Interface representing a project with its relevant details.
 *
 * @interface Project
 *
 * @property {string} name - The name of the project.
 * @property {string} tech - The technology stack used in the project.
 * @property {string} description - A brief description of the project.
 * @property {string} media - The media URL (video or image) associated with the project.
 * @property {string} github - The URL to the GitHub repository for the project.
 * @property {string} website - The URL to the live version of the project.
 */
export interface Project {
    name: string,
    tech: string,
    description: string,
    media: string,
    github: string,
    website: string
}
