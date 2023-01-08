import React from "react";

export type ConfigData = {
    title?: string
    description?: string
}

export const DefaultConfigData = {
    title: 'Juzaweb CMS',
    description: 'Juzaweb CMS',
};

export const Config = React.createContext(<ConfigData>(DefaultConfigData));