export interface Package {
  id: string
  name: string
  version: string
  displayName: string
  description: string
  unity: string
  homepage?: string
  documentationUrl?: string
  changelogUrl?: string
  licensesUrl?: string
  license?: string
  keywords?: string[]
  author?: PackageAuthor | string
  hideInEditor?: boolean
  vrchatVersion?: string
  unityRelease?: string
  samples?: PackageSample[]
  localPath?: string
  dependencies?: Record<string, string>
  gitDependencies?: Record<string, string>
  vpmDependencies?: Record<string, string>
  headers?: Record<string, string>
  legacyFolders?: Record<string, string>
  legacyFiles?: Record<string, string>
  legacyPackages?: Record<string, string>
}
export interface PackageAuthor {
  name?: string
  email?: string
  url?: string
}
export interface PackageSample {
  displayName?: string
  description?: string
  path?: string
}
