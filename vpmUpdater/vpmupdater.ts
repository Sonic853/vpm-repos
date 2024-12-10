import { Package } from "./models/package.ts"
import { VPM, VPMPackage, VPMPackageVersions } from "./models/vpm.ts"

const args = Deno.args

if (args.length <= 0) {
  console.log("需要传入参数！")
  Deno.exit()
}

const repository = args[0]
const path = args[1]
const name = args[2]
const version = args[3]
const zipSHA256 = args[4]
const url = `https://github.com/${repository}/releases/download/${version}/${name}-${version}.zip`

const packageFile: Package = JSON.parse(await Deno.readTextFile(`./${path}/package.json`))
const vpmFile: VPM = JSON.parse(await Deno.readTextFile(`./vpm.json`))

const packagesName = Object.keys(vpmFile.packages)

if (!packagesName.includes(name)) {
  const packages: Record<string, VPMPackageVersions> = {}
  packages[name] = {
    versions: {}
  }
  Object.keys(vpmFile.packages).forEach(key => {
    packages[key] = vpmFile.packages[key]
  })
  vpmFile.packages = packages
  vpmFile.packages[name].versions[version] = {
    ...packageFile,
    url,
    zipSHA256: zipSHA256 ?? undefined
  }
  await Deno.writeTextFile(`./vpm.json`, JSON.stringify(vpmFile, null, 2))
  Deno.exit()
}

const versions = Object.keys(vpmFile.packages[name].versions)
if (versions.includes(version)) {
  console.error("已含有该版本！")
  Deno.exit()
}

const versionsMap = new Map(Object.entries(vpmFile.packages[name].versions))
const newVersionsMap: Map<string, VPMPackage> = new Map()

newVersionsMap.set(version, {
  ...packageFile,
  url,
  zipSHA256: zipSHA256 ?? undefined
})

for (const _version of versionsMap)
  newVersionsMap.set(_version[0], _version[1])

vpmFile.packages[name].versions = Object.fromEntries(newVersionsMap.entries())
await Deno.writeTextFile(`./vpm.json`, JSON.stringify(vpmFile, null, 2))
