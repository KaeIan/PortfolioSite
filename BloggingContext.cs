using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ConsoleApp.PostgreSQL
{
	public class BloggingContext : DbContext
	{
		public DbSet<Blog> Blogs
		{
			get;
			set;
		}
		public DbSet<Post> Posts
		{
			get;
			set;
		}

		public BloggingContext(DbContextOptions<BloggingContext> options) : base(options)
		{

		}

		public BloggingContext()
		{ }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder
				.UseNpgsql("User ID=postgres;Password=pass;Server=localhost;Port=5432;Database=my_db;Integrated Security=true; Pooling=true;Command Timeout=0;");

		}
	}

	public class Blog
	{
		public int BlogId
		{
			get;
			set;
		}
		public string Url
		{
			get;
			set;
		}

		public List<Post> Posts
		{
			get;
			set;
		}
	}

	public class Post
	{
		public int PostId
		{
			get;
			set;
		}
		public string Title
		{
			get;
			set;
		}
		public string Content
		{
			get;
			set;
		}

		public int BlogId
		{
			get;
			set;
		}
		public Blog Blog
		{
			get;
			set;
		}
	}
}