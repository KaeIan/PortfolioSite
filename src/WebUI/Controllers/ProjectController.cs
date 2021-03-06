﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PersonalSite.Application.Projects.CreateProject;
using PersonalSite.Application.Projects.DeleteProject;
using PersonalSite.Application.Projects.Queries.GetProjects;
using PersonalSite.Application.Projects.UpdateProject;

namespace PersonalSite.WebUI.Controllers
{
	/// <summary>
	/// Manage the endpoints for projects.
	/// </summary>
	[Authorize]
	[ApiController]
	[Route("/Api/Project")]
	public class ProjectController : ApiController
	{
		private readonly ILogger _logger;
		//private readonly CrudService _crudService;

		/// <summary>
		/// Initializes a new instance of the <see cref="ProjectController"/> class.
		/// </summary>
		/// <param name="loggerFactory">The logger factory being used.</param>
		/// <param name="crudService">The crud service.</param>
		public ProjectController(ILoggerFactory loggerFactory)
		{
			_logger = loggerFactory.CreateLogger<ProjectController>();
			//_crudService = crudService;
		}

		/// <summary>
		/// Create a project.
		/// </summary>
		/// <param name="project">A project entity.</param>
		/// <returns>A <see cref="Task{TResult}"/> representing the result of the asynchronous operation.</returns>
		[HttpPost]
		[Authorize]
		[Route("")]
		public async Task<ActionResult<Guid>> CreateAsync(CreateProjectCommand command)
		{
			return await Mediator.Send(command);
		}

		/// <summary>
		/// edit a project.
		/// </summary>
		/// <param name="project">A project entity.</param>
		/// <returns>A <see cref="Task{TResult}"/> representing the result of the asynchronous operation.</returns>
		[HttpPut]
		[Authorize]
		[Route("{id}")]
		public async Task<ActionResult> EditAsync(Guid Id, UpdateProjectCommand command)
		{
			if (Id != command.Id)
			{
				return BadRequest();
			}

			await Mediator.Send(command);

			return NoContent();
		}

		/// <summary>
		/// gets all projects.
		/// </summary>
		/// <returns>All projects.</returns>
		[HttpGet]
		[AllowAnonymous]
		[Route("")]
		public async Task<ActionResult<IEnumerable<ProjectDto>>> GetAsync()
		{
			return Ok(await Mediator.Send(new GetProjectsQuery()));
		}


		[HttpGet]
		[AllowAnonymous]
		[Route("Highlights")]
		public async Task<ActionResult<IEnumerable<ProjectDto>>> GetHighlightedProjectsAsync()
		{
			return Ok(await Mediator.Send(new GetProjectsHighlightedQuery()));
		}

		/// <summary>
		/// Gets a single project, given an id.
		/// </summary>
		/// <param name="id">The id of the project.</param>
		/// <returns>The DTO of the project which matches the id.</returns>
		[HttpGet]
		[AllowAnonymous]
		[Route("{id}")]
		public async Task<ProjectDto> GetByIdAsync(Guid id)
		{
			return await Mediator.Send(new GetProjectsQueryById { Id = id });
		}

		/// <summary>
		/// deletes a particular project.
		/// </summary>
		/// <param name="id">The id of the project being deleted.</param>
		/// <returns>A <see cref="Task{TResult}"/> representing the result of the asynchronous operation.</returns>
		[HttpDelete]
		[Route("{id}")]
		public async Task<ActionResult> DeleteAsync(Guid id)
		{
			await Mediator.Send(new DeleteProjectCommand { Id = id });

			return NoContent();
		}
	}
}