<template>
	<div>
		<el-main>
			<el-table :data="tableData">
				<el-table-column prop="author_name" label="作者" width="180">
				</el-table-column>
				<el-table-column label="日期" width="180">
					<template slot-scope="scope">
						{{scope.row.date.substring(0,11)}}
					</template>
				</el-table-column>
				<el-table-column prop="title" label="名称">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="120">
					<template slot-scope="scope">
						<el-button type="text" size="small">查看</el-button>
						<el-button type="text" size="small">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-main>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
			}
		},
		created() {
			this.$store.dispatch('getUserList').then(() => {
				this.tableData = this.$store.state.userList;
			});
		}
	}
</script>

<style>

</style>
