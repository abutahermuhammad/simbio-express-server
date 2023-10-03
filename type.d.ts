// Type representing an application ID.
export type AppId = string;

// Enum for API request source contexts allowed.
export type ContextOptions = "web" | "tauri" | "app";

// Enum for supported data sorting types.
export type SortType = "asc" | "dsc";


// GET Methods default params
export type GetRequestParams = {
    context?: ContextOptions;
    search?: string;
    filter?: string;
    q?: string;
    limit?: number;
    offset?: number;
    sortedBy?: string;
    sortOrder?: SortType;
    exclude?: AppId[];
    include?: AppId[];
}