## [2.5.1](https://github.com/db-migrate/db-migrate-base/compare/v2.5.0...v2.5.1) (2026-10-10)


### Bug Fixes

* unknown types keep the case of their quoted parts ([4c50f42](https://github.com/db-migrate/db-migrate-base/commit/4c50f4206066be372f55d4df3190a97dfd1c1ea7)), closes [#37](https://github.com/db-migrate/db-migrate-base/issues/37)



# [2.5.0](https://github.com/db-migrate/db-migrate-base/compare/v2.4.2...v2.5.0) (2026-10-09)


### Bug Fixes

* escape strings quoted with double quotes by doubling them ([7b17a49](https://github.com/db-migrate/db-migrate-base/commit/7b17a49acf06a203f7aa659c43c40ee917a66b17)), closes [#5](https://github.com/db-migrate/db-migrate-base/issues/5)


### Features

* insert objects and several rows, with the values as parameters ([cee55e6](https://github.com/db-migrate/db-migrate-base/commit/cee55e6010efbd99b346236088d9bb3193a557e0)), closes [#10](https://github.com/db-migrate/db-migrate-base/issues/10) [#23](https://github.com/db-migrate/db-migrate-base/issues/23) [#26](https://github.com/db-migrate/db-migrate-base/issues/26) [#27](https://github.com/db-migrate/db-migrate-base/issues/27) [#28](https://github.com/db-migrate/db-migrate-base/issues/28)



## [2.4.2](https://github.com/db-migrate/db-migrate-base/compare/v2.4.1...v2.4.2) (2026-10-09)


### Bug Fixes

* log the column without a type instead of failing on it ([da5ad41](https://github.com/db-migrate/db-migrate-base/commit/da5ad411cbe6959fd9e36caced528097c8b4df14)), closes [#36](https://github.com/db-migrate/db-migrate-base/pull/36)



## [2.4.1](https://github.com/db-migrate/db-migrate-base/compare/v2.4.0...v2.4.1) (2026-10-09)


### Bug Fixes

* drop unsupported special default values, remove from tables ([9e05b31](https://github.com/db-migrate/db-migrate-base/commit/9e05b312409113803f4970d8fe7de5f9d68f3229))



# [2.4.0](https://github.com/db-migrate/db-migrate-base/compare/v2.3.1...v2.4.0) (2026-10-08)


### Features

* **state:** set run_on by the database clock ([6781064](https://github.com/db-migrate/db-migrate-base/commit/67810648b2cc2618c29cbb2848f6b725a6c8e6c8))


### Upgrade notes

* `run_on` of state, migration and seed records was written with the clock of the
  migrating process so far, it is now set by `CURRENT_TIMESTAMP`. If the migrating
  process ran in a different time zone than the database session and the column
  stores no time zone (MySQL `DATETIME`, PostgreSQL `timestamp`), records written
  shortly after the upgrade can sort before the last records written before it.
  This window is as long as the time zone offset.



<a name="2.0.0"></a>
# [2.0.0](https://github.com/db-migrate/db-migrate-base/compare/v1.6.3...v2.0.0) (2019-05-16)


### Features

* **methods:** add new migrator methods ([1783a66](https://github.com/db-migrate/db-migrate-base/commit/1783a66))



<a name="1.6.3"></a>
## [1.6.3](https://github.com/db-migrate/db-migrate-base/compare/v1.6.2...v1.6.3) (2019-02-11)


### Bug Fixes

* **bug:** add column has no def options ([2963dd0](https://github.com/db-migrate/db-migrate-base/commit/2963dd0))



<a name="1.6.2"></a>
## [1.6.2](https://github.com/db-migrate/db-migrate-base/compare/v1.6.1...v1.6.2) (2019-02-11)


### Bug Fixes

* **bug:** check for defaultValue existence first ([18338bc](https://github.com/db-migrate/db-migrate-base/commit/18338bc))



<a name="1.6.1"></a>
## [1.6.1](https://github.com/db-migrate/db-migrate-base/compare/v1.6.0...v1.6.1) (2019-02-11)


### Bug Fixes

* **bug:** wrong order for preparing spec ([a15eaad](https://github.com/db-migrate/db-migrate-base/commit/a15eaad))



<a name="1.6.0"></a>
# [1.6.0](https://github.com/db-migrate/db-migrate-base/compare/v1.5.4...v1.6.0) (2019-02-11)


### Features

* **defaultValue:** add advanced handling for defaultValues ([0296b9e](https://github.com/db-migrate/db-migrate-base/commit/0296b9e))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/db-migrate/db-migrate-base/compare/v1.5.3...v1.5.4) (2019-01-28)


### Bug Fixes

* **insert:** Support documented mysql promise based insert command. ([986b190](https://github.com/db-migrate/db-migrate-base/commit/986b190)), closes [db-migrate/node-db-migrate#606](https://github.com/db-migrate/node-db-migrate/issues/606)
* don’t reassign callback, don’t call if it’s not a function ([8160337](https://github.com/db-migrate/db-migrate-base/commit/8160337))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/db-migrate/db-migrate-base/compare/v1.5.2...v1.5.3) (2017-06-30)



<a name="1.5.2"></a>
## [1.5.2](https://github.com/db-migrate/db-migrate-base/compare/v1.5.1...v1.5.2) (2017-06-25)



<a name="1.5.1"></a>
## [1.5.1](https://github.com/db-migrate/db-migrate-base/compare/v1.5.0...v1.5.1) (2017-06-25)



<a name="1.5.0"></a>
# [1.5.0](https://github.com/db-migrate/db-migrate-base/compare/v1.4.0...v1.5.0) (2017-06-25)



<a name="1.4.0"></a>
# [1.4.0](https://github.com/db-migrate/db-migrate-base/compare/v1.3.3...v1.4.0) (2017-06-25)



<a name="1.3.3"></a>
## [1.3.3](https://github.com/db-migrate/db-migrate-base/compare/v1.3.1...v1.3.3) (2017-06-25)



<a name="1.3.1"></a>
## [1.3.1](https://github.com/db-migrate/db-migrate-base/compare/v1.3.0...v1.3.1) (2017-06-25)



<a name="1.3.0"></a>
# [1.3.0](https://github.com/db-migrate/db-migrate-base/compare/v1.2.7...v1.3.0) (2017-06-25)



<a name="1.2.7"></a>
## [1.2.7](https://github.com/db-migrate/db-migrate-base/compare/v1.2.5...v1.2.7) (2016-07-27)



<a name="1.2.5"></a>
## [1.2.5](https://github.com/db-migrate/db-migrate-base/compare/v1.2.4...v1.2.5) (2016-02-03)


### Bug Fixes

* **dropTable:** Empty options object ([8c00115](https://github.com/db-migrate/db-migrate-base/commit/8c00115))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/db-migrate/db-migrate-base/compare/v1.2.3...v1.2.4) (2016-01-27)



<a name="1.2.3"></a>
## [1.2.3](https://github.com/db-migrate/db-migrate-base/compare/v1.2.2...v1.2.3) (2016-01-27)


### Bug Fixes

* **api:** drop table overwrite options on promises ([602f5e3](https://github.com/db-migrate/db-migrate-base/commit/602f5e3))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/db-migrate/db-migrate-base/compare/v1.2.1...v1.2.2) (2015-10-17)



<a name="1.2.1"></a>
## [1.2.1](https://github.com/db-migrate/db-migrate-base/compare/v1.2.0...v1.2.1) (2015-09-08)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/db-migrate/db-migrate-base/compare/v1.0.1...v1.2.0) (2015-09-08)



<a name="1.0.1"></a>
## 1.0.1 (2015-02-14)



