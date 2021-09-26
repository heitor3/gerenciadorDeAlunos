using AlunosApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlunosApi.Context
{
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {
        }

        public DbSet<Aluno> Alunos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Aluno>().HasData(
                new Aluno
                {
                    Id = 1,
                    Nome = "Thalyson Tadeu Delfino Rezende",
                    Email = "thalyson@gmail.com",
                    Idade = 27,
                },
                new Aluno
                {
                    Id = 2,
                    Nome = "Yago Prestes Montanari Rabelo",
                    Email = "yago@gmail.com",
                    Idade = 26,
                }

                );
        }


    }
}
